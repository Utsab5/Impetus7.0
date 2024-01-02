import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Load Owl Carousel CSS only on the client-side
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const EventCarouselComp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    // Load Owl Carousel CSS only on the client-side
    if (typeof window !== 'undefined') {
      import('owl.carousel/dist/assets/owl.carousel.css');
      import('owl.carousel/dist/assets/owl.theme.default.css');
    }
  }, []);

  const games = [
    {
      title: 'Dota 2',
      description: 'Dota 2 is a multiplayer online battle arena by Valve...',
      imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg',
    },
    {
      title: 'The Witcher 3',
      description: 'The Witcher 3 is a multiplayer online battle arena by Valve...',
      imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg',
    },
    {
      title: 'RDR 2',
      description: 'RDR 2 is a multiplayer online battle arena by Valve...',
      imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg',
    },
    {
      title: 'PUBG Mobile',
      description: 'PUBG 2 is a multiplayer online battle arena by Valve...',
      imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg',
    },
    {
      title: 'Fortnite',
      description: 'Battle royale where 100 players fight to be the last person standing.',
      imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg',
    },
    {
      title: 'Far Cry 5',
      description: 'Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.',
      imageUrl: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg',
    },
  ];

  const styles = {
    gameSection: {
      padding: '60px 50px',
    },
    lineTitle: {
      position: 'relative',
      width: '400px',
    },
    item: {
      margin: '0 15px 60px',
      width: '320px',
      height: '400px',
      display: 'flex',
      alignItems: 'flex-end',
      background: '#343434 no-repeat center center / cover',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      transition: 'all 0.4s ease-in-out',
      cursor: 'pointer',
    },
    activeItem: {
      width: '500px',
      boxShadow: '12px 40px 40px rgba(0, 0, 0, 0.25)',
    },
    itemAfter: {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: '0',
      top: '0',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
    },
    itemDesc: {
      padding: '0 24px 12px',
      color: '#fff',
      position: 'relative',
      zIndex: '1',
      overflow: 'hidden',
      transform: 'translateY(calc(100% - 54px))',
      transition: 'all 0.4s ease-in-out',
    },
    activeItemDesc: {
      transform: 'none',
    },
    itemDescP: {
      opacity: '0',
      transform: 'translateY(32px)',
      transition: 'all 0.4s ease-in-out 0.2s',
    },
    activeItemDescP: {
      opacity: '1',
      transform: 'translateY(0)',
    },
    owlTheme: {
      marginTop: '-20px',
      position: 'relative',
      zIndex: '5',
    },
  };

  return (
    <section style={styles.gameSection}>
      <h2 style={styles.lineTitle}>trending games</h2>
      <OwlCarousel className="owl-theme" loop margin={10} autoWidth>
        {games.map((game, index) => (
          <div
            key={index}
            style={{
              ...styles.item,
              ...(index === activeIndex ? styles.activeItem : {}),
            }}
            onClick={() => handleItemClick(index)}
          >
            <div style={styles.itemAfter} />
            <div style={{ ...styles.itemDesc, ...(index === activeIndex ? styles.activeItemDesc : {}) }}>
              <h3>{game.title}</h3>
              <p style={{ ...styles.itemDescP, ...(index === activeIndex ? styles.activeItemDescP : {}) }}>
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default EventCarouselComp;