
import React from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/react";
import { postImages } from "./PostGrid";

const ProfileDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileImage = styled.img`
  max-width: 25%;
  border: 1px solid #919191;
  border-radius: 50%;
  padding: 4px;
  flex-basis: 40%;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 60%;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAQIDBQYE/8QAMhAAAgEDAgMFBwMFAAAAAAAAAAECAwQRBTESIVETIkFhgRQyM1JxkdEjQsEVYoKSof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDqgAACBZICUixCJAAxVrilQjxVZqP13Z4KutU4vFKlKfm3gDaA0v8AW5550I/7HqoavQqPFROk+r5r7gbAjATTSaeU9miQKNFWZGUaAggkgC62QC2QAqAACLoqi6Ak8WpXvslJKHxZ7eS6ntOZv63b3lSecpPhj9EBgnOVSTlOTlJ7tlQAAAA9thfztJKMsyovePTzR0EJxqQjODzGSymckbfRLl8UreT5Y4o/ygNwVaLEMDGyCzKgXWyAWyAFQABZFkViWQFa0+zozn8sWzkzrKsO0pTg/wB0WjlGnFtPdcmBAAAAAAenT5cN9RfWWPueY9emU+0v6fSPefoB0hDJIYFGVLMqwLrZALZACoAAtEsVRZAScveyUr2s4xwuNnUHMX8OC+rp/O39+YHnAAAAADa6E4dpVWO/wrn5GqNroUc1K0+kUgN0QySGBVlGWZUC62QC2QAqAAJRdGNF0BY1esWinT9oh70Pe80bQiUVKLjJZTWGgORBluaLt7idJvPC+T6oxAAABK5vC3Z0enWvstviXvy5y8vI1WkUVVvMy2pri9ToABDJKsCrKksgC62QC2QAqAABZMqEwMiJKpnhvtSp0MQptTnnvY8F+QNVqXF7dVc01z5fTwPKdHe2cL6jGUWlPGYS6nP1aU6NRwqxcZLwYFATvtzNnZaROpidzmEPCPi/wBOhJdrWfjwpG6PHe1adhaRVKEU89yJnt7iFzRjUpvk910fQDIyjZLZVgCCSALrZALZACoNZX1eKbVCHF/dLkvsa+teV6/v1HjouSA3Ve9oUOUqicvljzZ4K2r1JZVGCgusubNaAM1W6r1viVZNdM4RhAA3+j1u0s+B703j08DJqfYK1brx4vCOOTz5M1ekVuyu+FvlUWPXwLazObuoxl7ij3fPqBn0ONCXG3D9aL3fPl5G5OY02c4X1Ls+bbw15eJu9TufZ7STTxOXdiBptUufabuXC+5Dux/lmG3uq1s26UsZ3TWUzCANtT1nwrUvWH4PZSvbes8QqrPR8mc6AOpBzlK6rUfh1JJdN0e+hq/hXh/lH8AbdbIHnV/a4X68ABzYAAAAAAALRk4SUo7xeUbjUnCtYRrfRx9TSnqdfi05UW+can/MAZtFSd7l7qDwZdcqZq0qa/auJ+p5NOq9le0m3hN8L9Sl5V7e6qVPBvC+i5AYAAAAAAAAAAAAAAAAAAAAAAkgAAAAAAAAAAAB//9k=" || [];

function ProfileDetails() {

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
    <Box 
        // border="solid 1px red"
    >
    <ProfileDetailsWrapper>
      <ProfileImage src={UserImage} />
      <ProfileStats>
        <StatsBlock>
          <Text fontWeight="600" fontSize={{ base: '16px', md: '18px', lg: '20px' }}>{postImages.length}</Text>
          <Text letterSpacing="1%" marginTop="5px" textTransform="capitalize" fontSize={{ base: '10px', md: '13px', lg: '14px' }}>posts</Text>
        </StatsBlock>
        <StatsBlock>
          <Text fontWeight="600" fontSize={{ base: '16px', md: '18px', lg: '20px' }}>55.3K</Text>
          <Text letterSpacing="1%" marginTop="5px" textTransform="capitalize" fontSize={{ base: '10px', md: '13px', lg: '14px' }}>followers</Text>
        </StatsBlock>
        <StatsBlock>
          <Text fontWeight="600" fontSize={{ base: '16px', md: '18px', lg: '20px' }}>332</Text>
          <Text letterSpacing="1%" marginTop="5px" textTransform="capitalize" fontSize={{ base: '10px', md: '13px', lg: '14px' }}>following</Text>
        </StatsBlock>
      </ProfileStats>
    </ProfileDetailsWrapper>
    </Box>
  );
}

export default ProfileDetails;