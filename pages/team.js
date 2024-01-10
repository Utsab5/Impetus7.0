import { Divider, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import { Box } from "@mui/system";
import { useState } from "react";
import Contact from "../components/Contact";
import ContactCard from "../components/ContactCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

export default function TeamPage() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const classes = {
    root: {
      justifyContent: "center",
    },
    scroller: {
      flexGrow: "0",
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = {
    margin: "50px 0",
    h1: {
      margin: "50px 0",
      fontSize: "48px",
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
    ".tabs": {
      width: "1000px",
      maxWidth: "95vw",
      mb: "100px",
      ".tab": {
        margin: "10px",
        fontSize: {
          lg: "16px",
          md: "16px",
          sm: "12px",
          xs: "12px",
        },
      },
      ".Mui-selected": {
        backgroundColor: "#01658d",
        border: "0px",
        borderRadius: "10px",
        color: "white",
      },
    },
  };
  const sponsorship_person = {
    person1: {
      name: "Jay R Abhimanyu",
      phone: "+91 6301028505",
      post: "Sponsorship Head",
      imgname: "IMG-20231223-WA0024 - 2020MEB096 YANAMADALA_JAYA.jpg",
      insta: "https://www.instagram.com/the_j.a.y_",
      link: "https://www.linkedin.com/in/Jay R Abhimanyu",
    },
    person2: {
      name: "Pritha Ghosh",
      phone: "+91 8777476875",
      post: "Sponsorship Head",
      imgname: "IMG-20231216-WA0025 - 2020MEB007 PRITHA_GHOSH.jpg",
      insta: "https://www.instagram.com/me._.pritha",
      link: "https://www.linkedin.com/in/pritha-ghosh-27761b211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };  
  const event_person = {
    person1: {
      name: "Mahesh Bandlamudi",
      phone: "+91 8639555844",
      post: "Event Head",
      imgname: "IMG_20230721_163334803 - 2020MEB051 MAHESH_BANDLAMUDI.jpg",
      insta: "https://www.instagram.com/mahesh.bandlamudi_._?igsh=aWNhZXhlMTJ5ZzUx",
      link: "https://www.linkedin.com/in/mahesh-bandlamudi-b99873206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Avi Ambast",
      phone: "+91 7277876396",
      post: "Event Head",
      imgname: "IMG_20231105_140755 - 2020MEB031 AVI_AMBAST.jpg",
      insta: "https://www.instagram.com/ambast.avi",
      link: "https://www.linkedin.com/in/avi-ambast-8a1521225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Anuvab Ghosh",
      phone: "+91 6291884285",
      post: "Event Head",
      imgname: "20231219_135251 - 2020MEB036 ANUVAB_GHOSH.jpg",
      insta: "https://www.instagram.com/anuvab_ghosh?igsh=MWdkcnAxNTN0YnNlMw==",
      link: "https://www.linkedin.com/in/anuvab-ghosh-a10a57174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person4: {
      name: "Arushi Das",
      phone: "+91 8917684258",
      post: "Event Head",
      imgname: "IMG-20231218-WA0190 - 2020MEB110 ARUSHI_DAS.jpg",
      insta: "https://www.instagram.com/ar.u_shhii?igsh=ODA1NTc5OTg5Nw==",
      link: "https://www.linkedin.com/in/arushi1505?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person5: {
      name: "Bobby Uddanti",
      phone: "+91 8374757468",
      post: "Event Head",
      imgname: "IMG_20231207_130709486_MF_PORTRAIT - 2020MEB026 UDDANTI_BHAVANI.jpg",
      insta: "https://www.instagram.com/bobby_uddanti",
      link: "https://www.linkedin.com/in/BHAVANI PRASAD UDDANTI",
    },

  }
  const design_person = {
    person1: {
      name: "Poorva Mondal",
      phone: "+91 8436376729",
      post: "Design & Content Head",
      imgname: "IMG-20231214-WA0113 - 2020MEB016 POORVA_MONDAL.jpg",
      insta: "https://instagram.com/poorvamondal",
      link: "https://www.linkedin.com/in/poorva-mondal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Joybrata Dhar",
      phone: "+91 6296985537",
      post: "Design & Content Head",
      imgname: "47576616_494793307709043_505289639515389952_n - 2020MEB047 JOYBRATA_DHAR.jpg",
      insta: "https://www.instagram.com/joy_in_the_h0use/",
      link: "https://www.linkedin.com/in/joybrata-dhar-a193091b8/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BiMg8CC1vQAO6PtzJwyVt%2BA%3D%3D",
    },
    person3: {
      name: "Parth Pravin Shende",
      phone: "+91 8483973876",
      post: "Design & Content Head",
      imgname: "20230308094301_IMG_9935 - 2020MEB056 SHENDE_PARTH.JPG",
      insta: "https://www.instagram.com/parth.shende_25",
      link: "https://www.linkedin.com/in/parth-shende-0b023b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  }
  const publicity_person = {
    person1: {
      name: "DEENDAYAL UPADHYAY",
      phone: "+91 6350619979",
      post: "Publicity Head",
      imgname: "20240104_173816 - 2020MEB032 DEENDYAL_UPADHAYAY.jpg",
      insta: "https://www.instagram.com/_dee_xv",
      link: "https://www.linkedin.com/in/deendayal-upadhyay",
    },
    person2: {
      name: "Sangmu Tamang",
      phone: "+91 9382187029",
      post: "Publicity Head",
      imgname: "20240106_132845 - 2020MEB009 SANGMU_TAMANG.jpg",
      insta: "https://www.instagram.com/_sa_n_g_",
      link: "https://www.linkedin.com/in/sangmu-tamang-374469220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person3: {
      name: "Vipul Yadav",
      phone: "+91 8630273065",
      post: "Publicity Head",
      imgname: "IMG_0069 - 2020MEB082 VIPUL_YADAV.jpeg",
      insta: "https://www.instagram.com/Vipulyadav_vy",
      link: "https://www.linkedin.com/in/Vipulyadav_vy",
    },
  }
  const finance_person = {
    person1: {
      name: "Arnav Anand",
      phone: "+91 7061991256",
      post: "Finance Head",
      imgname: "Arnav - 2020MEB103 ARNAV_ANAND.png",
      insta: "https://www.instagram.com/_arnav03",
      link: "https://www.linkedin.com/in/arnav3",
    },
    person2: {
      name: "Sayantan Paul",
      phone: "+91 7439910063",
      post: "Finance Head",
      imgname: "WhatsApp Image 2023-02-15 at 18.23.59 - 2020MEB106 SAYANTAN_PAUL.jpeg",
      insta: "https://www.instagram.com/Overthinking_menace",
      link: "https://www.linkedin.com/in/Look it up",
    },
  };
  const iam_person = {
    person1: {
      name: "Snehal Kumar",
      phone: "+91 7093081024",
      post: "Industry Academia Meet",
      imgname: "Snapchat-1473531011 - 2020MEB072 TIPPANA_SAI.jpg",
      insta: "https://www.instagram.com/_always.snehal_",
      link: "https://www.linkedin.com/in/Tippana Sai Snehal Kumar",
    },
  };
  const coordinator_person = {
    person1: {
      name: "Divyansh Bajpai",
      phone: "+91 9369462864",
      post: "Main Coordinator",
      imgname: "WhatsApp Image 2023-12-28 at 4.19.43 AM - 2020MEB064 DIVYANSH_BAJPAI.jpeg",
      insta: "https://www.instagram.com/divyanshh.b",
      link: "https://www.linkedin.com/in/divyansh-bajpai-97720b215/",
    },
    person2: {
      name: "Vasu Krishna Khemka",
      phone: "+91 7808814413",
      post: "Main Coordinator",
      imgname: "IMG_20210702_191027_578_resized(1) - 2020MEB003 VASU_KRISHNA.jpg",
      insta: "Use from last time",
      link: "Use from last time",
    },
    person3: {
      name: "Amartya Singh",
      phone: "+91 7357769918",
      post: "Joint Coordinator",
      imgname: "WhatsApp Image 2024-01-06 at 12.39.41_ddaa52be - 2021MEB043 AMARTYA_SINGH.jpg",
      insta: "https://www.instagram.com/amartya_singh.29",
      link: "https://www.linkedin.com/in/Amartya Singh",
    },
    person4: {
      name: "Ivan Jacob Thomas",
      phone: "+91 7463884470",
      post: "Joint Coordinator",
      imgname: "WhatsApp Image 2023-08-20 at 11.18.55 PM - 2021MEB059 IVAN_JACOB THOMAS.jpeg",
      insta: "https://www.instagram.com/ivan_jax/",
      link: "https://www.linkedin.com/in/ivan-jacob-thomas-a62b9b239/",
    },
    
  };
  const tl_person = {
    person1: {
      name: "Pritam Nayek",
      phone: "+91 7074437263",
      post: "Travel & Logistics Head",
      imgname: "IMG_20231021_110941_288 - 2020MEB034 PRITAM_NAYEK.jpg",
      insta: "https://www.instagram.com/pritam._.nayek?igsh=MWd0b2s2cnY3d2Yxcw==",
      link: "https://www.linkedin.com/in/pritam-nayek-024b28199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    person2: {
      name: "Himanshu Shivam",
      phone: "+91 9674577342",
      post: "Travel & Logistics Head",
      imgname: "RD1-1067 - 2020MEB042 HIMANSHU_SHIVAM.jpg",
      insta: "https://www.instagram.com/shivamhimansh",
      link: "https://www.linkedin.com/in/Himanshu Shivam",
    },
  };
  const webD_person = {
    person1: {
      name: "Durga Prasad",
      phone: "+91 7661044831",
      post: "Technical Head",
      imgname: "vpx2yg - 2020MEB114 ACHANA_NAGA.jpg",
      insta: "https://x.com/durgaprasad_118",
      link: "https://www.linkedin.com/in/dp1108",
    },
    person2: {
      name: "Utsab Kundu",
      phone: "+91 8100460390",
      post: "Technical Executive",
      imgname: "utsab.jpg",
      insta: "https://www.instagram.com/utsab_kundu5/",
      link: "https://www.linkedin.com/in/utsab-kundu-3a742421b/",
    },
    person3: {
      name: "DEENDAYAL UPADHYAY",
      phone: "+91 6350619979",
      post: "Technical Consultant",
      imgname: "20240104_173816 - 2020MEB032 DEENDYAL_UPADHAYAY.jpg",
      insta: "https://www.instagram.com/_dee_xv",
      link: "https://www.linkedin.com/in/deendayal-upadhyay",
    },
  };
  const videoPhoto_person = {
    person2: {
      name: "Jay R Abhimanyu",
      phone: "+91 6301028505",
      post: "Videography Head",
      imgname: "IMG-20231223-WA0024 - 2020MEB096 YANAMADALA_JAYA.jpg",
      insta: "https://www.instagram.com/the_j.a.y_",
      link: "https://www.linkedin.com/in/Jay R Abhimanyu",
    },
    person1: {
      name: "DEENDAYAL UPADHYAY",
      phone: "+91 6350619979",
      post: "Photography and Videography Head",
      imgname: "20240104_173816 - 2020MEB032 DEENDYAL_UPADHAYAY.jpg",
      insta: "https://www.instagram.com/_dee_xv",
      link: "https://www.linkedin.com/in/deendayal-upadhyay",
    },
    person3: {
      name: "Parth Pravin Shende",
      phone: "+91 8483973876",
      post: "Photography Head",
      imgname: "20230308094301_IMG_9935 - 2020MEB056 SHENDE_PARTH.JPG",
      insta: "https://www.instagram.com/parth.shende_25",
      link: "https://www.linkedin.com/in/parth-shende-0b023b224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  }
  

  

  return (
    <>
      <Box sx={styles} className="center1" style={{marginTop:"100px"}}>
        <Typography variant="h1">Contact Us</Typography>
        <br></br>
        <Box className="tabs">
          <Tabs value={value} onChange={handleChange}>
            <Tab className="tab" label="Main Coordinators" />
            <Tab className="tab" label="Sponsorship Team" />
            <Tab className="tab" label="Event Management Team" />
            <Tab className="tab" label="Technical Team" />
            <Tab className="tab" label="Content and Design Team" />
            <Tab className="tab" label="Publicity Team" />
            <Tab className="tab" label="Finance Team" />
            <Tab className="tab" label="Food and Logistics Team" />
            <Tab className="tab" label="IAM" />
            <Tab className="tab" label="Videography and Photography Team" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} className="contactCards">{/*Main Coordinators*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={coordinator_person.person1} />
            <ContactCard person={coordinator_person.person2} />
          </Box>

          <ContactCard person={coordinator_person.person3} />
          <ContactCard person={coordinator_person.person4} />
        </TabPanel>
        <TabPanel value={value} index={1} className="contactCards">{/*Sponsorship Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={sponsorship_person.person1} />
            <ContactCard person={sponsorship_person.person2} />
            {/* <ContactCard person={sponsorship_person.person3} /> */}
          </Box>
          <br style={{ width: "100%" }}></br>
          {/* <ContactCard person={sponsorship_person.person4} />
          <ContactCard person={sponsorship_person.person5} /> */}

        </TabPanel>
        <TabPanel value={value} index={2} className="contactCards">{/*Event Team*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={event_person.person1} />
            <ContactCard person={event_person.person2} />
            <ContactCard person={event_person.person3} />
            <ContactCard person={event_person.person4} />
            <ContactCard person={event_person.person5} />
          </Box>          
          {/* <ContactCard person={event_person.person6} />
          <ContactCard person={event_person.person7} />
          <ContactCard person={event_person.person8} />
          <ContactCard person={event_person.person9} />
          <ContactCard person={event_person.person10} />
          <ContactCard person={event_person.person11} />
          <ContactCard person={event_person.person12} />
          <ContactCard person={event_person.person13} /> */}


        </TabPanel>

        <TabPanel value={value} index={3} className="contactCards">{/*Technical Team*/}

          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={webD_person.person1} />
            <ContactCard person={webD_person.person3} />
          </Box>
          <ContactCard person={webD_person.person2} />
        </TabPanel>

        <TabPanel value={value} index={4} className="contactCards">{/*Design*/}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={design_person.person1} />
            <ContactCard person={design_person.person2} />
            <ContactCard person={design_person.person3} />
          </Box>
          
          {/* <ContactCard person={design_person.person4} />
          <ContactCard person={design_person.person5} />
          <ContactCard person={person.person10} /> */}
        </TabPanel>

        <TabPanel value={value} index={5} className="contactCards">{/*Publicity */}
          <Box style={{ width: "100%", marginBottom: "80px" }}>

            <ContactCard person={publicity_person.person1} />
            <ContactCard person={publicity_person.person2} />
            <ContactCard person={publicity_person.person3} />
          </Box>
          {/* <ContactCard person={publicity_person.person5} />          
          <ContactCard person={publicity_person.person4} />
          <ContactCard person={publicity_person.person6} />
          <ContactCard person={publicity_person.person7} />
          <ContactCard person={publicity_person.person8} /> */}
        </TabPanel>

        <TabPanel value={value} index={6} className="contactCards">{/*Finance*/}
          <ContactCard person={finance_person.person1} />
          <ContactCard person={finance_person.person2} />
        </TabPanel>

        <TabPanel value={value} index={7} className="contactCards">{/*Food*/}
          <ContactCard person={tl_person.person1} />
          <ContactCard person={tl_person.person2} />
        </TabPanel>

        <TabPanel value={value} index={8} className="contactCards">{/*IAM*/}
          <ContactCard person={iam_person.person1} />
        </TabPanel>

        <TabPanel value={value} index={9} className="contactCards">{/*IAM*/}
          <ContactCard person={videoPhoto_person.person1} />
          <ContactCard person={videoPhoto_person.person2} />
          <ContactCard person={videoPhoto_person.person3} />
        </TabPanel>
      </Box>
      <Contact />
    </>
  );
}
