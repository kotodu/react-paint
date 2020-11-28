import React from "react";

//---------------------------------------------
// 画像
import GitHubIcon from "./image/github.svg";

//---------------------------------------------

/**
 * @summary Nav用LinkItem
 * @param param0 リンクURLと表示名称
 * @returns {JSX.Element}
 */
const NavLink = ({
    href,
    itemName,
    imageSrc
}) => {

    // 画像部分
    const img = (
        <img
            src={imageSrc}
            alt={itemName}
            width={24}
            height={24}
        />
    );
    return (
        <div
            className="nav-item"
        >
            <a
                className="nav-link"
                href={href}
            >
                {img}
            </a>
        </div>
    );
}

/**
 * @summary TopBarコンポーネント
 * @returns {JSX.Element}
 */
const TopBar = () => {

    // ブランド名
    const brand = (
        <div
            className="navbar-brand"
            href="#"
        >
            React-paint
        </div>
    );

    // GitHubへのソースのリンク
    const githubLink = (
        <NavLink
            itemName="GitHub"
            href="https://github.com/kotodu/react-paint"
            imageSrc={GitHubIcon}
        />
    );

    // 描画内容
    return (
        <nav
            className="navbar navbar-light bg-info px-5"
        >
            {brand}
            {githubLink}
        </nav>
    );
}

export default TopBar;