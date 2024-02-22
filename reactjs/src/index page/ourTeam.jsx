import React from 'react';

const OurTeam = () => {
  const teamStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const memberStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <>
      <center>
        <p
          style={{
            width: '100%',
            background: 'grey',
            lineHeight: '250%',
            fontSize: '24px',
            fontWeight: 'bolder',
            textDecoration: 'italic',
            padding: '10px',
            color: 'white',
          }}
        >
          Developed By
        </p>
      </center>
      <br />
      <div style={teamStyle}>
        <div style={memberStyle}>
          <img
            src="http://localhost:2006/pics/profile.png" 
            alt="Developer"
            style={imageStyle}
          />
          <h4>Vishali Bansal</h4>
          <p>Full Stack Developer</p>
          <p>Developer of Website</p>
        </div>

        {/* Guide */}
        <div style={memberStyle}>
          <img
            src="http://localhost:2006/pics/sir.jpeg" 
            alt="Guide"
            style={imageStyle}
          />
          <h4>Rajesh Bansal</h4>
          <p>Author of Book "Real Java"</p>
          <p>Guide</p>
        </div>
      </div>
      <br />
    </>
  );
};

export default OurTeam;
