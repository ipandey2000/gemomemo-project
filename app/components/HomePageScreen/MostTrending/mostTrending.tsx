import React from 'react'


const cardData = [
  {
    id: 1,
    title: "World of Warcraft",
    players: "10K+ Players",
    features: ["Action", "Adventure"],
    releaseDate: "10th August 2024",
    price: "$48",
  },
  // Add more card objects here if needed
];

const MostTrending = () => {
  return (
    <div>
<div>
    <div>
        <h1>Most Trending</h1>
    </div>
    <div>
        <p>GO TO GAME STORE</p>
    </div>
</div>
 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {cardData.map((card) => (
        <div
          key={card.id}
          style={{
            border: '2px solid brown',
            borderRadius: '8px',
            overflow: 'hidden',
            width: '300px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: 'green',
              position: 'absolute',
              top: '16px',
              left: '16px',
            }}
          />
          <h1 style={{ fontSize: '20px', margin: '0 0 8px 0' }}>{card.title}</h1>
          <div style={{ marginBottom: '8px' }}>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={{
                  color: index < 3 ? 'gold' : 'gray',
                  fontSize: '20px',
                  marginRight: '2px',
                }}
              >
                ★
              </span>
            ))}
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '8px 0' }}>
            <li style={{ color: 'red' }}>{card.features[0]}</li>
            <li style={{ color: 'red' }}>{card.features[1]}</li>
          </ul>
          <p style={{ margin: '8px 0' }}>Released {card.releaseDate}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{card.price}</span>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: 'yellow',
                border: 'none',
                borderRadius: '4px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>




    </div>
  )
}

export default MostTrending



