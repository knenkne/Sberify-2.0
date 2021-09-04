import styled from '@emotion/styled';

export const SideBarStyled = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--primary-BG);
    min-height: 100vh;
    /* TODO: constants */
    width: 400px;
    /* TODO: dark theme shadow */
    box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.04), 0px 4px 8px rgba(38, 38, 38, 0.16);
    z-index: 10;

    @media (max-width: 1599.98px) {
        position: relative;
        width: 64px;
    }
`;

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 80px;
    padding: 20px;
`;

// TODO: Auth link
export const ProfileStyled = styled.button`
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background-color: var(--primary-text);
    background-image: url('https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7e/7e28241577008d6c0deb7346f7ab9f35df22d099_full.jpg');
    background-size: 100%;
`;
