import styled from "styled-components";

export const Footer_styled = styled.footer`
    height: 250px;
    width: 100%;
    bottom: 0;
    left: 0;
    flex: 0 0 auto;

    box-shadow: 0px 0px 70px 0px rgba(0, 0, 0, 0.25);
    border-radius: 20px 20px 0 0;
    transition: background 0.3s linear;

    .container {
        max-width: 1240px;
        padding: 30px 40px;
        margin: auto;
    };

    .content_footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    };

    .profile .logo_area{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    };

    .profile .logo_area img{
        border-radius: 50%;
        border: 1px solid var(--primary-color);
    };

    .logo_area .logo_name {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 1rem;
        color: var(--secondary-color);
    };

    .desc_area{
        max-width: 500px;
        margin-bottom: 1.25rem;
    };

    .desc_area p {
        color: #828282;
        font-weight: 400;
        line-height: 28px;
    };

    .social_media a{
        color: #828282;
        margin-right: 22px;
        font-size: 24px;
    };

    .social_media a:hover {
        color: #313131
    };

    .footer_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
    };

    .copy_right{
        color: #828282;
        display: flex;
        align-items: center;
    };

    .copy_right span{
        margin-left: 8px;
        font-weight: 400;
        letter-spacing: 0.135rem;
    };

    .tou a{
        color: #828282;
        margin-left: 1.5rem;
    };

    .tou a:hover{
        color: #313131;
    };
`;