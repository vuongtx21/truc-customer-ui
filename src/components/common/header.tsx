import { Flex } from "antd";
import React, { Fragment, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import LoginModal from "../modals/login";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const [isShowLoginModal, setShowLoginModal] = useState<boolean>(false);

  const onCloseLoginModal = () => setShowLoginModal(false);

  return (
    <Fragment>
      <LoginModal isShow={isShowLoginModal} onClose={onCloseLoginModal} />

      <Flex className="header" align="center" justify="space-between" gap={50}>
        <div className="header__logo">
          <span>Nhà thuốc</span>
        </div>
        <Flex
          align="center"
          justify="space-between"
          gap={10}
          className="header__search"
        >
          <input
            type="search"
            autoComplete="off"
            placeholder="Tìm tên thuốc, bệnh lý, thực phẩm chức năng..."
          />
          <Flex className="search-icon" align="center" justify="center">
            <FaSearch />
          </Flex>
        </Flex>
        <button className="login-btn" onClick={() => setShowLoginModal(true)}>
          <Flex align="center" gap={10}>
            <FaUser />
            <span>Đăng nhập</span>
          </Flex>
        </button>
      </Flex>
    </Fragment>
  );
};

export default Header;
