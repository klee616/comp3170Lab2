
export default function ArtistDetail({ name, photoUrl, country, yearsActive }) {
  
  return (<>
    <div className="artistCard">
      <div className="artistImage">
        <img src={photoUrl} className="img"/>
      </div>
      <div className='artistInfo'>
        <h2>{name}</h2>
        <p>Country: {country}</p>
        <p>Years active: {yearsActive}</p>
      </div>
    </div>
  </>)
}