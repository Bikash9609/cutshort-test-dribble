import React from 'react';
import { Controller } from 'react-hook-form';
import {
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	Stack,
	Typography,
} from '@mui/material';
import { BsPersonFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';

import Input from 'components/UI/Input';
import keywords from 'constants/keywors';
import BoxWithIconText from 'components/UI/BoxWithIconText';

function CreateController({
	control,
	rules,
	name,
	component,
	placeholder,
	...inputProps
}) {
	return (
		<Controller
			control={control}
			rules={rules}
			name={name}
			render={(props) => (
				<Input
					name={name}
					placeholder={placeholder}
					isError={props.fieldState.error}
					helperText={props.fieldState.error?.message}
					{...inputProps}
					{...props.field}
				/>
			)}
		/>
	);
}

function Steps({ currentStep, control }) {
	let content = (
		<>
			<CreateController
				control={control}
				label='Full Name'
				placeholder='Bikash Tiwari'
				name='fullName'
				rules={{
					required: {
						value: true,
						message: keywords.form.fieldIsRequired,
					},
				}}
			/>
			<CreateController
				control={control}
				label='Display Name'
				name='displayName'
				placeholder='Bikash'
				rules={{
					required: {
						value: true,
						message: keywords.form.fieldIsRequired,
					},
				}}
			/>
		</>
	);

	if (currentStep === 2)
		content = (
			<>
				<CreateController
					control={control}
					label='Workspace Name'
					placeholder='Eden'
					name='workspaceName'
					rules={{
						required: {
							value: true,
							message: keywords.form.fieldIsRequired,
						},
					}}
				/>

				<Controller
					control={control}
					name='workspaceUrl'
					defaultValue={null}
					render={(props) => (
						<Input
							name='workspaceUrl'
							label='Workspace URL'
							placeholder='Example'
							optional
							isError={props.fieldState.error}
							helperText={props.fieldState.error?.message}
							TextFieldProps={{
								sx: {
									pl: 0,
								},
								InputProps: {
									sx: {
										pl: 0,
									},
									startAdornment: (
										<Typography
											bgcolor='border.light'
											sx={{
												height: '100%',
												py: '1rem',
												px: '1rem',
												mr: 2,
												color: '#94A1B8',
												fontWeight: '600',
												border: '2px solid #eee',
												borderWidth: '0 2px 0 0',
												borderColor: '#EEF2F6',
											}}
										>
											www.eden.com/
										</Typography>
									),
								},
							}}
							{...props.field}
						/>
					)}
				/>
			</>
		);

	if (currentStep === 3)
		content = (
			<Controller
				control={control}
				name='type'
				defaultValue={null}
				rules={{
					required: {
						value: true,
						message: keywords.form.fieldIsRequired,
					},
				}}
				render={(props) => (
					<RadioGroup
						name='type'
						{...props.field}
						onChange={(_e, value) => props.field.onChange(value)}
					>
						<Stack
							direction={['column', 'row']}
							spacing={2}
							height='100%'
							sx={{
								px: [2, 0, 0],
							}}
						>
							<FormControlLabel
								value='0'
								label={
									<BoxWithIconText
										icon={<BsPersonFill />}
										title={keywords.Onboarding.ForMyself}
										summary={keywords.Onboarding.WriteBetterThinkMore}
										handleClick={() => true}
										isActive={props.field.value === '0'}
									/>
								}
								control={<Radio sx={{ display: 'none' }} />}
							/>
							<FormControlLabel
								value='1'
								label={
									<BoxWithIconText
										icon={<RiTeamFill />}
										title={keywords.Onboarding.WithMyTeam}
										summary={keywords.Onboarding.WikisDocsTaskProjects}
										handleClick={() => true}
										isActive={props.field.value === '1'}
										sx={{ ml: ['-0.6rem', 0] }}
									/>
								}
								control={<Radio sx={{ display: 'none' }} />}
								sx={{ pt: [2, 0] }}
							/>
						</Stack>
						{props.fieldState.error?.message && (
							<FormHelperText error>
								{props.fieldState.error?.message}
							</FormHelperText>
						)}
					</RadioGroup>
				)}
			/>
		);

	if (currentStep === 4) return null;

	return (
		<Stack direction='column' spacing={3}>
			{content}
		</Stack>
	);
}

export default Steps;
