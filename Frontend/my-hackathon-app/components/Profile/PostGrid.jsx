
import React from "react";
import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

export const postImages = [
  "https://scontent.fpat3-3.fna.fbcdn.net/v/t1.6435-9/52396196_2225470484373008_2537096667044249600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2NkE6PBAU1sAX9vhyuP&_nc_ht=scontent.fpat3-3.fna&oh=00_AfAeZybzkI0du56nPsZYyLeqUpThK2we8yQOyZ8MOI0f9Q&oe=63CBA14B",
  "https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/49311970_2202594403327283_2550608269085245440_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6XFLhgqFkN0AX8MISoW&_nc_ht=scontent.fpat3-2.fna&oh=00_AfB8kO3ah6dfRkuv5GOd6RXOURl5OBFwNI0l0LGN5TKIrw&oe=63CB78C3",
  "https://scontent.fpat3-1.fna.fbcdn.net/v/t1.6435-9/83733704_2480865168833537_8173687394126528512_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=3TTLklscXtcAX-pIF_y&_nc_ht=scontent.fpat3-1.fna&oh=00_AfAubNQLICz5dMfh7mzjt3tOVBjm0SKUuXNu8nhEKSAKlg&oe=63CB9501",
  "https://scontent.fpat3-3.fna.fbcdn.net/v/t1.6435-9/52350925_2225470267706363_8939058928575053824_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=7lC0Nsf3mfcAX9u0UyC&_nc_ht=scontent.fpat3-3.fna&oh=00_AfDz6An-DPXrqI__XPUAOHZvS_9tqNh0voen2mbnd4mY2g&oe=63CB86A4",
  "https://scontent.fpat3-3.fna.fbcdn.net/v/t1.6435-9/52396196_2225470484373008_2537096667044249600_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2NkE6PBAU1sAX9vhyuP&_nc_ht=scontent.fpat3-3.fna&oh=00_AfAeZybzkI0du56nPsZYyLeqUpThK2we8yQOyZ8MOI0f9Q&oe=63CBA14B",
  "https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/49311970_2202594403327283_2550608269085245440_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=6XFLhgqFkN0AX8MISoW&_nc_ht=scontent.fpat3-2.fna&oh=00_AfB8kO3ah6dfRkuv5GOd6RXOURl5OBFwNI0l0LGN5TKIrw&oe=63CB78C3",
 
];



const GridWrapper = styled.div`
  margin-top: 3px;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(3, 1fr);
  img {
    max-width: 100%;
  }
  align-items: center;
  padding: 2%;
`;

function PostGrid() {

  const [data, setData] = useState([]);

  let token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token");
  }
  console.log(token);

  let headers = {
    authentication: `Bearer ${token}`,
  };

  const getData = () => {
    axios
      .get("https://cobalt-blue-bison-hem.cyclic.app/user", { headers })

      // .then(res=>res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  if( data!==undefined)
  {
    console.log(data)
  }

  return (
    <GridWrapper>
      {postImages.map((postImage) => (
        <Image cursor="pointer" src={postImage} alt="" />
      ))}
    </GridWrapper>
  );
}

export default PostGrid;