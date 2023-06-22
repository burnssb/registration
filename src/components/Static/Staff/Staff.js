import { Box } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider, Header } from 'components/Layout/SharedStyles';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Staff() {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById(location.hash.replace('#', ''));
    if (element) element.scrollIntoView();
  }, [location]);

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Portland English Country Dance Ball<br />
        Our Wonderful Performers
      </PageTitle>

      <Header id="ErikWeberg1">
        Calling by <em>Erik Weberg</em>
      </Header>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/ErikWeberg1.jpg'} 
            alt="Erik Weberg" 
            style={{ width: 225 }}
          />
        </Box>

        <Box sx={{ mt: -2 }}>
          <Paragraph>
            I crawled onto the music and dance scene in 1985 in Moscow, Idaho. Or maybe it was 1986. 
            I was a grad student at the time and, frankly, don't remember. In 1990 I began calling 
            dances. Contra dances at first, then ten years later I dipped my feet into the English 
            dance teaching and calling world. In the mid-90s I spent time as a dance organizer, sound 
            operator and itinerant carpenter, annoying others in those fields with great alacrity and 
            dragging down the reputation of everyone involved. Since then, as my skills have deteriorated, 
            I have enjoyed an astounding level of adequacy as a leader of English country dance. I owe 
            my successful rise through the ranks of mediocracy to the many callers whom I've spent time 
            criticizing and from whom I've “borrowed” techniques and repertoire. I do strive to be 
            moderately succinct in my teaching and somewhat accurate in my prompting. Currently, my goal 
            is to climb the bell curve of calling efficiency; from the left, hoping to reach the apex of 
            my career any day now.
          </Paragraph>
        </Box>
      </Box>

      <SectionDivider />

      <Header id="FineCompanions">
        Music by <em>Fine Companions</em>
      </Header>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
        <Box sx={{ mt: -2 }}>
          <Paragraph>
          Start with four great talents, mix in some magic and get a musical 
          feast better than the sum of its ingredients.   This Portland favorite 
          just keeps growing their reputation and it's all good!  The band features 
          Betsy Branch on fiddle, Lisa Scott on piano, Bill Tomczak on clarinet & 
          saxophone, and Erik Weberg on flute. If you like lots of dreamy textures 
          and rich harmonies, this is the band for you!
          </Paragraph>
        </Box>

        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/FineCompanions.png'} 
            alt="Fine Companions" 
            style={{ width: 225 }}
          />
        </Box>
      </Box>

      <SectionDivider />

      <Box
        id="BetsyBranch"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/BetsyBranch.png'} 
            alt="Betsy Branch" 
            style={{ width: 170 }}
          />
        </Box>

        <Box sx={{ mt: -2 }}>
          <Paragraph>
            <StyledLink to="https://fiddlefrau.com/"><strong>Betsy Branch</strong></StyledLink> has 
            been a mainstay of the Portland, Oregon dance community for many years. Her exuberant 
            dance fiddling has delighted dancers on both coasts and her warmth and engaging smile 
            extend beyond the stage and draw in dancers and listeners alike. She 
            was the Associate Music Director of Portland's Revels theater company, 
            and their house fiddler. Betsy plays for English and Irish dancing, and 
            in several contra dance bands.  Her primary passion is teaching and 
            mentoring fiddlers and dance musicians. Betsy teaches privately out of 
            her home in SE Portland, and for workshops around the region. When not 
            playing or teaching, she works as a music editor, arranger, and 
            transcriber.
          </Paragraph>
        </Box>
      </Box>

      <SectionDivider />

      <Box
        id="LisaScott"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/LisaScott.png'} 
            alt="Lisa Scott" 
            style={{ width: 170 }}
          />
        </Box>

        <Box sx={{ mt: -2 }}>
          <Paragraph>
            <strong>Lisa Scott</strong>	is an accomplished pianist and 
            teacher. Coming from a musical heritage, she earned a Bachelor of 
            Music at Lewis and Clark College. She studied the art of accompaniment 
            at the University of Southern California and in New York. She began 
            Scottish dancing, soon earned her preliminary teaching certificate, 
            and then learned to play for Scottish dance. Lisa has played piano for 
            Scottish dance in the U.S., Canada, and Japan, and Scotland. Many years 
            ago she fell in love with English country dance and music and has been 
            playing for workshops and balls ever since. Lisa's sensitivity to dance 
            rhythms and her lyrical style make her music a joy for dancers.
          </Paragraph>
        </Box>
      </Box>

            <SectionDivider />

      <Box
        id="BillTomczak"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/BillTomczak.png'} 
            alt="Bill Tomczak" 
            style={{ width: 170 }}
          />
        </Box>

        <Box sx={{ mt: -2 }}>
          <Paragraph>
            <StyledLink to="https://billtomczak.com/"><strong>Bill Tomczak</strong></StyledLink> started 
            playing clarinet at the age of 9. After a typical round of high school bands and concerts, 
            he entered Northwestern University as a music major and studied under several teachers from 
            the Chicago Symphony. In 1979, he discovered the world of International Folk Dancing and 
            has been playing for folk dance of one kind or another ever since. The International 
            repertoire provided a solid ground for all his subsequent work with Balkan, Klezmer, Greek, 
            contra dance and jazz. He developed a reputation as a tasteful and innovative improviser 
            who learned to blend seamlessly into a wide variety of fiddle styles, practically defining 
            a whole new tradition for contra dance clarinet and saxophone playing. Bill now plays for 
            contra dancing and English Country Dancing with The Latter Day Lizards, Campaign for Reel 
            Time and Fine Companions. He has recorded with The Latter Day Lizards, BLT, Wild Asparagus 
            and Yankee Ingenuity and appears on the recordings Cascade of Tears and Gypsy Wine with 
            Mary Lea and friends.
          </Paragraph>
        </Box>
      </Box>

      <SectionDivider />

      <Box
        id="ErikWeberg2"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/ErikWeberg2.png'} 
            alt="Erik Weberg" 
            style={{ width: 170 }}
          />
        </Box>

        <Box sx={{ mt: -2 }}>
          <Paragraph>
            <StyledLink to="https://www.erikweberg.com/"><strong>Erik Weberg</strong></StyledLink> plays 
            flutes, harmonicas, and bombardes (yes, plural). He is a regular musician at English country 
            dances in Portland, and he organizes and plays for a monthly contra dance with the band 
            Joyride. He is also an English and contra dance caller, performing at festivals and weekends 
            around the country, and programmed Northwest Passage for many years. Erik is also co-producer 
            of the Portland Megaband contra dance event.
          </Paragraph>
        </Box>
      </Box>

      <SectionDivider />

      <Header id="JohnOorthuys">
        Sound by <em>John Oorthuys</em>
      </Header>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: "space-between",
          my: 2,
          columnGap: 2,
          rowGap: 2
        }}
      >
         <Box sx={{ mt: -2 }}>
          <Paragraph>
          Highly regarded by dancers, musicians, and callers for his high-quality sound work, John 
          Oorthuys has handled the sound board for many dances, balls, camps, and special events for 
          PCDC and surrounding Pacific Northwest communities. He's has been the Ball sound engineer 
          for years and years, and his wizardry makes the sound fantastic.
          </Paragraph>
        </Box>

        <Box sx={{ mt: 1 }}>
          <img 
            src={process.env.PUBLIC_URL + '/ecdball/JohnOorthuys.jpg'} 
            alt="John Oorthuys" 
            style={{ width: 225 }}
          />
        </Box>
      </Box>




    </StyledPaper>
  );
}
