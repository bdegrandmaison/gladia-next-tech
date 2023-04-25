const homeContainerStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  justifyContent: 'center',
};

const HeroSection = () => (
  <div style={homeContainerStyle}>
    <h1 className="my-2">Welcome to Gladia</h1>
    <h6>
      If you want to get the text from an audio file or a video, you have come to the right place
    </h6>
    <p>Please sign up or log in to make the magic happen</p>
  </div>
);

export default HeroSection;
