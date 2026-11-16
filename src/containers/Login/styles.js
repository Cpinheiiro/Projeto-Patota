import styled, { css, keyframes } from "styled-components";

// atalho: c("primary") => theme.colors.primary
const c =
    (name) =>
        ({ theme }) =>
            theme.colors[name];

/* ---------- estilos de texto (vêm da config do Stitch) ---------- */
const labelSm = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.labelSm};
  line-height: 14px;
  letter-spacing: 0.06em;
  font-weight: 700;
`;

const labelMd = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.labelMd};
  line-height: 16px;
  letter-spacing: 0.04em;
  font-weight: 600;
`;

const labelLg = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.labelLg};
  line-height: 20px;
  letter-spacing: 0.02em;
  font-weight: 700;
`;

const bodySm = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodySm};
  line-height: 20px;
`;

const bodyMd = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.bodyMd};
  line-height: 24px;
`;

const titleMd = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.titleMd};
  line-height: 26px;
  font-weight: 700;
`;

const headlineSm = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.headlineSm};
  line-height: 30px;
  font-weight: 700;
`;

const headlineLg = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.headlineLg};
  line-height: 40px;
  letter-spacing: -0.02em;
  font-weight: 700;
`;

const pulse = keyframes`
  50% { opacity: 0.5; }
`;

/* ---------- página e luzes de fundo ---------- */
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  background: ${c("background")};
  color: ${c("onSurface")};
`;

export const GlowContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const GlowTop = styled.div`
  position: absolute;
  top: -160px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 500px;
  border-radius: 50%;
  background: rgba(104, 219, 169, 0.1);
  filter: blur(140px);
  opacity: 0.7;
`;

export const GlowBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: -160px;
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: rgba(35, 42, 58, 0.4);
  filter: blur(120px);
  opacity: 0.5;
`;

/* ---------- cabeçalho ---------- */
export const Header = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 24px 48px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${c("surfaceContainerHigh")};
  border: 1px solid rgba(61, 74, 66, 0.4);
  color: ${c("primary")};

  svg {
    font-size: 26px;
  }
`;

export const BrandName = styled.span`
  ${headlineSm}
  display: block;
  line-height: 1;
  letter-spacing: -0.025em;
  color: ${c("onSurface")};
`;

export const BrandTag = styled.span`
  ${labelSm}
  display: block;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${c("onSurfaceVariant")};
`;

export const StatusContainer = styled.div`
  ${labelMd}
  display: none;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${c("surfaceContainerLow")};
  border: 1px solid rgba(61, 74, 66, 0.3);
  color: ${c("secondary")};

  @media (min-width: 640px) {
    display: flex;
  }
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${c("primary")};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

/* ---------- card central ---------- */
export const Main = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;

  @media (min-width: 768px) {
    padding: 48px 32px;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 720px;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: 1rem;
  background: ${c("surfaceContainer")};
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    grid-template-columns: 5fr 7fr;
  }
`;

/* ---------- coluna da esquerda ---------- */
export const LeftContainer = styled.div`
  display: none;
  position: relative;
  overflow: hidden;
  padding: 48px;
  background: ${c("surfaceContainerLowest")};
  border-right: 1px solid rgba(61, 74, 66, 0.2);

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const LeftImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  mix-blend-mode: luminosity;
  transform: scale(1.05);
`;

export const LeftOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    #070e1d,
    rgba(7, 14, 29, 0.8),
    transparent
  );
`;

export const Tag = styled.span`
  ${labelMd}
  position: relative;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(104, 219, 169, 0.1);
  border: 1px solid rgba(104, 219, 169, 0.2);
  color: ${c("primary")};

  svg {
    font-size: 16px;
  }
`;

export const LeftBottom = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
`;

export const AttendanceContainer = styled.div`
  display: grid;
  gap: 14px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: rgba(35, 42, 58, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
`;

export const AttendanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AttendanceTitle = styled.span`
  ${labelSm}
  text-transform: uppercase;
  color: ${c("onSurfaceVariant")};
`;

export const AttendanceCount = styled.span`
  ${labelSm}
  color: ${c("primary")};
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${c("surfaceContainerHighest")};
`;

export const ProgressFill = styled.div`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${c("primary")};
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 4px;
`;

export const AvatarList = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  ${labelSm}
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${c("surfaceVariant")};
  background: ${({ $bg, theme }) => theme.colors[$bg]};
  color: ${({ $color, theme }) => theme.colors[$color]};

  & + & {
    margin-left: -8px;
  }
`;

export const AvatarText = styled.span`
  ${bodySm}
  padding-left: 4px;
  color: ${c("onSurfaceVariant")};
`;

export const RuleTitle = styled.h3`
  ${titleMd}
  margin-bottom: 4px;
  color: ${c("onSurface")};
`;

export const RuleText = styled.p`
  ${bodySm}
  color: ${c("onSurfaceVariant")};
`;

/* ---------- coluna da direita ---------- */
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  background: ${c("surfaceContainer")};

  @media (min-width: 640px) {
    padding: 48px;
  }

  @media (min-width: 1024px) {
    padding: 64px;
  }
`;

export const WelcomeContainer = styled.div`
  margin-bottom: 36px;
`;

export const AccessLabel = styled.div`
  ${labelMd}
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  color: ${c("primary")};

  svg {
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  ${headlineLg}
  font-size: 40px;
  line-height: 48px;
  color: ${c("onSurface")};
`;

export const Subtitle = styled.p`
  ${bodyMd}
  margin-top: 12px;
  color: ${c("onSurfaceVariant")};
`;

/* ---------- formulário ---------- */
export const Form = styled.form`
  display: grid;
  gap: 24px;
`;

export const InputContainer = styled.div`
  display: grid;
  gap: 8px;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  ${labelLg}
  color: ${c("onSurface")};
`;

export const ForgotLink = styled.a`
  ${labelMd}
  color: ${c("primary")};

  &:hover {
    text-decoration: underline;
  }
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 16px;
  display: flex;
  pointer-events: none;
  color: ${c("onSurfaceVariant")};

  svg {
    font-size: 22px;
  }
`;

export const Input = styled.input`
  ${bodyMd}
  width: 100%;
  padding: 16px 48px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${c("surfaceContainerLowest")};
  border: 1px solid
    ${({ $error, theme }) =>
        $error ? theme.colors.error : "rgba(61, 74, 66, 0.4)"};
  color: ${c("onSurface")};
  transition: all 150ms;

  &::placeholder {
    color: rgba(188, 202, 192, 0.5);
  }

  &:focus {
    border-color: ${c("primary")};
    box-shadow: 0 0 0 2px rgba(104, 219, 169, 0.2);
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  display: flex;
  padding: 4px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: none;
  color: ${c("onSurfaceVariant")};
  transition: color 150ms;

  &:hover {
    color: ${c("onSurface")};
  }

  svg {
    font-size: 22px;
  }
`;

export const ErrorText = styled.span`
  ${bodySm}
  color: ${c("error")};
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 4px;
`;

export const RememberLabel = styled.label`
  ${bodySm}
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${c("onSurfaceVariant")};

  input {
    width: 16px;
    height: 16px;
    accent-color: #68dba9;
    cursor: pointer;
  }
`;

export const TimerContainer = styled.div`
  ${labelSm}
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${c("tertiary")};

  svg {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  ${headlineSm}
  width: 100%;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 24px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${c("primary")};
  color: ${c("onPrimary")};
  box-shadow: 0 0 24px -2px rgba(104, 219, 169, 0.35);
  transition: all 200ms;

  &:hover {
    background: ${c("primaryFixed")};
    box-shadow: 0 0 32px 2px rgba(104, 219, 169, 0.5);
  }

  &:active {
    transform: scale(0.99);
  }

  svg {
    font-size: 24px;
  }
`;

/* ---------- convidado ---------- */
export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 32px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(61, 74, 66, 0.3);
  }

  span {
    ${labelSm}
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${c("onSurfaceVariant")};
  }
`;

export const GuestContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${c("surfaceContainerLow")};
  border: 1px solid rgba(61, 74, 66, 0.3);

  > svg {
    flex-shrink: 0;
    margin-top: 2px;
    font-size: 24px;
    color: ${c("secondary")};
  }
`;

export const GuestTitle = styled.h4`
  ${labelLg}
  margin-bottom: 4px;
  font-weight: 600;
  color: ${c("onSurface")};
`;

export const GuestText = styled.p`
  ${bodySm}
  color: ${c("onSurfaceVariant")};
`;

/* ---------- rodapé ---------- */
export const Footer = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  background: ${c("surfaceContainerLow")};
  border-top: 1px solid rgba(61, 74, 66, 0.2);
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  strong {
    ${titleMd}
    color: ${c("onSurface")};
  }

  p {
    ${bodySm}
    color: ${c("onSurfaceVariant")};
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    ${labelMd}
    color: ${c("onSurfaceVariant")};
    transition: color 150ms;

    &:hover {
      color: ${c("primary")};
    }
  }
`;