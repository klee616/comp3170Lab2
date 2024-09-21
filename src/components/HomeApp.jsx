import ArtistDetail from './ArtistDetail';

export default function HomeApp({ title, artistlist}) {
    
        console.log(artistlist)
    return (
        <>
            <h1>{title}</h1>
            {
                artistlist && artistlist.map((artist) => {
                   return (<>
                    <ArtistDetail 
                    name={artist.name} photoUrl={artist.photo_url} country={artist.country}
                    yearsActive={artist.years_active}
                    />
                    </>)
                })
            }
        </>
    );
}