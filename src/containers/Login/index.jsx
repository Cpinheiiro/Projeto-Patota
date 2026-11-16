import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  MdArrowForward,
  MdGroupAdd,
  MdLockOutline,
  MdMailOutline,
  MdShield,
  MdSports,
  MdSportsSoccer,
  MdTimer,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

import {
  Container,
  GlowContainer,
  GlowTop,
  GlowBottom,
  Header,
  BrandContainer,
  Logo,
  BrandName,
  BrandTag,
  StatusContainer,
  StatusDot,
  Main,
  Card,
  LeftContainer,
  LeftImage,
  LeftOverlay,
  Tag,
  LeftBottom,
  AttendanceContainer,
  AttendanceHeader,
  AttendanceTitle,
  AttendanceCount,
  ProgressBar,
  ProgressFill,
  AvatarContainer,
  AvatarList,
  Avatar,
  AvatarText,
  RuleTitle,
  RuleText,
  RightContainer,
  WelcomeContainer,
  AccessLabel,
  Title,
  Subtitle,
  Form,
  InputContainer,
  LabelRow,
  Label,
  ForgotLink,
  InputBox,
  InputIcon,
  Input,
  ToggleButton,
  ErrorText,
  OptionsContainer,
  RememberLabel,
  TimerContainer,
  Button,
  Divider,
  GuestContainer,
  GuestTitle,
  GuestText,
  Footer,
  FooterContent,
  FooterBrand,
  FooterNav,
} from "./styles";

// Imagem que o Stitch usou. Esse link pode parar de funcionar:
// o ideal é baixar a imagem, colocar em src/assets e importar.
const BACKGROUND_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB50YgDBx_0fzZosppLpd9XlRPWE2_NP1bFaZHQ9FMXgQC-jh_aoUzb1JHGNYEEg6rLeQz58qm2RvHyhV2KryQLebsZxLUu-nLfmM7b68rwMbbcZgMO-f-cPDvi9OwhVih6jZXFVU4uqVu64RTwp1hfhp5cKvQ-vxaMAcV_AoAYsweS2_FxwrEBILRHUWGXa7f9_jz1Z296uz_qsJQZA6rZHWr2V22c3IslvB4lvZIE";

// Dados de exemplo da tela (depois vêm de verdade)
const CONFIRMED = 14;
const TOTAL = 16;
const PLAYERS = [
  { initials: "CA", bg: "surfaceContainer", color: "onSurface" },
  { initials: "RM", bg: "primaryContainer", color: "onPrimaryContainer" },
  { initials: "LS", bg: "surfaceBright", color: "onSurface" },
];

const schema = Yup.object({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .required("A senha é obrigatória"),
});

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const year = new Date().getFullYear();
  const percent = (CONFIRMED / TOTAL) * 100;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <GlowContainer>
        <GlowTop />
        <GlowBottom />
      </GlowContainer>

      <Header>
        <BrandContainer>
          <Logo>
            <MdSportsSoccer />
          </Logo>
          <div>
            <BrandName>Patota de Sexta</BrandName>
            <BrandTag>Futebol &amp; Resenha</BrandTag>
          </div>
        </BrandContainer>

        <StatusContainer>
          <StatusDot />
          <span>Próximo racha: Sexta, 20h30</span>
        </StatusContainer>
      </Header>

      <Main>
        <Card>
          <LeftContainer>
            <LeftImage $image={BACKGROUND_IMAGE} />
            <LeftOverlay />

            <Tag>
              <MdShield />
              Temporada {year}
            </Tag>

            <LeftBottom>
              <AttendanceContainer>
                <AttendanceHeader>
                  <AttendanceTitle>Lista de Presença</AttendanceTitle>
                  <AttendanceCount>
                    {CONFIRMED} / {TOTAL} Confirmados
                  </AttendanceCount>
                </AttendanceHeader>

                <ProgressBar>
                  <ProgressFill $percent={percent} />
                </ProgressBar>

                <AvatarContainer>
                  <AvatarList>
                    {PLAYERS.map((player) => (
                      <Avatar
                        key={player.initials}
                        $bg={player.bg}
                        $color={player.color}
                      >
                        {player.initials}
                      </Avatar>
                    ))}
                  </AvatarList>
                  <AvatarText>Vagas quase esgotadas</AvatarText>
                </AvatarContainer>
              </AttendanceContainer>

              <div>
                <RuleTitle>Regra de Ouro da Sexta</RuleTitle>
                <RuleText>
                  Confirme até quinta às 18h para garantir sua vaga no sorteio
                  dos coletes oficiais.
                </RuleText>
              </div>
            </LeftBottom>
          </LeftContainer>

          <RightContainer>
            <WelcomeContainer>
              <AccessLabel>
                <MdSports />
                ÁREA DE ACESSO DO ATLETA
              </AccessLabel>
              <Title>Bem-vindo de volta, craque!</Title>
              <Subtitle>
                Acesse para confirmar sua presença no racha desta sexta-feira e
                conferir as estatísticas da rodada.
              </Subtitle>
            </WelcomeContainer>

            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
              <InputContainer>
                <Label htmlFor="email">E-mail cadastrado</Label>
                <InputBox>
                  <InputIcon>
                    <MdMailOutline />
                  </InputIcon>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@futebol.com.br"
                    $error={!!errors.email}
                    {...register("email")}
                  />
                </InputBox>
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </InputContainer>

              <InputContainer>
                <LabelRow>
                  <Label htmlFor="password">Senha de acesso</Label>
                  <ForgotLink href="#">Esqueceu a senha?</ForgotLink>
                </LabelRow>
                <InputBox>
                  <InputIcon>
                    <MdLockOutline />
                  </InputIcon>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha secreta"
                    $error={!!errors.password}
                    {...register("password")}
                  />
                  <ToggleButton
                    type="button"
                    aria-label="Alternar visibilidade da senha"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </ToggleButton>
                </InputBox>
                {errors.password && (
                  <ErrorText>{errors.password.message}</ErrorText>
                )}
              </InputContainer>

              <OptionsContainer>
                <RememberLabel>
                  <input type="checkbox" />
                  <span>Lembrar de mim</span>
                </RememberLabel>
                <TimerContainer>
                  <MdTimer />
                  <span>Chamada fecha em 24h</span>
                </TimerContainer>
              </OptionsContainer>

              <Button type="submit">
                <span>Entrar em Campo</span>
                <MdArrowForward />
              </Button>
            </Form>

            <Divider>
              <span>Ainda não faz parte?</span>
            </Divider>

            <GuestContainer>
              <MdGroupAdd />
              <div>
                <GuestTitle>Convidado ou novo membro?</GuestTitle>
                <GuestText>
                  Novos atletas são adicionados através da indicação de um
                  mensalista ativo da patota. Solicite ao administrador da
                  quadra pelo grupo do WhatsApp.
                </GuestText>
              </div>
            </GuestContainer>
          </RightContainer>
        </Card>
      </Main>

      <Footer>
        <FooterContent>
          <FooterBrand>
            <strong>Patota de Sexta</strong>
            <p>© {year} Patota de Sexta. Todos os direitos reservados.</p>
          </FooterBrand>
          <FooterNav>
            <a href="#">Termos de Convivência</a>
            <a href="#">Regras da Quadra</a>
          </FooterNav>
        </FooterContent>
      </Footer>
    </Container>
  );
}
