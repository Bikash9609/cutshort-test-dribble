import { Button, IconButton, Stack, styled } from '@mui/material';

export const MainStack = styled(Stack)`
	background-color: #fff;
	height: 100%;
	padding: 2rem;
	padding-bottom: 2.5rem;
	border-radius: 3px;
	@media (max-width: 768px) {
		padding-bottom: 1.5rem;
		padding: 2rem;
	}
`;

export const LogoImg = styled('img')`
	width: 130px;
	margin: 1rem 0;
	margin-top: 0;
`;

export const ContentStack = styled(Stack)`
	width: 700px;
	padding: 2rem;
	@media (max-width: 768px) {
		width: 100vw;
		box-sizing: border-box;
	}
`;

export const SuccessCheckButton = styled(IconButton)`
	width: 6rem;
	height: 6rem;
	svg {
		height: 100%;
		width: 100%;
		fill: ${({ theme }) => theme.palette.primary.main};
	}
`;

export const SubmitButton = styled(Button)`
	@media (max-width: 768px) {
		position: fixed;
		bottom: 0;
		left: 0;
		border-radius: 0;
		padding: 1rem 1rem;
	}
`;
