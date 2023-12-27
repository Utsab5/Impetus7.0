@@ -11,7 +11,6 @@ import { useLoading } from "../components/LoadingContext";
import LoadingComp from "../components/LoadingComp";

const styles = {

  minHeight: "100vh",
  minWidth: "100vw",
};
	@@ -70,18 +69,12 @@ export default function HomePage() {
      {loading && <LoadingComp />}
      <Box sx={containerStyles}>
        <AnimatePresence>


              <Box >
                {/* <HomePageVideo /> */}
                {/* <VideoText hideIt={hideIt} /> */}
                <Box>Hello</Box>
                <Box>abcdefghijklmnopqrstuvwxyz</Box>

              </Box>



        </AnimatePresence>
      </Box>
      <HomePageVideo />
      <VideoText hideIt={hideIt} />
      <HomePageAbout />
      <Contact />
    </Box>
  );
}