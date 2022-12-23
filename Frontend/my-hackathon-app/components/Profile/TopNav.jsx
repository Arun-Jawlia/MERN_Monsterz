
import React from "react";
import styled from "@emotion/styled";
import { BiChevronDown } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 10px;
  border-bottom: 1px solid #151515;
`;

const AccountNav = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h4`
  margin: 0;
  font-size: 20px;
`;

const NotificationDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: #ec4b57;
  border-radius: 50%;
`;
const PostMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  
`;

const Menu = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 18px;
`;

const MenuNotification = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  width: 18px;
  height: 18px;
  font-size: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec4b57;
`;

const UserId = "VivEk_bTu" || [];

function TopNav() {

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
      .get("https://cobalt-blue-bison-hem.cyclic.app/user/profile/:user_id", { headers })

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
    <TopNavWrapper>
      <AccountNav>
        <ProfileName>{UserId}</ProfileName>
        <BiChevronDown size="28px" />
        <NotificationDot></NotificationDot>
      </AccountNav>
      <PostMenu>
      <FiPlusSquare />
        <Menu>
          <AiOutlineMenu />
          <MenuNotification>
            <span>1</span>
          </MenuNotification>
        </Menu>
      </PostMenu>
    </TopNavWrapper>
  );
}

export default TopNav;