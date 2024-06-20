import Handlebars from 'handlebars';
import './password.scss';
export { default as PasswordPage } from './password.hbs?raw';

Handlebars.registerHelper('password-page-fields', () => {
	return [
		{
			title: 'Пароль',
			value: 'выавыа',
			name: 'oldPassword',
			type: 'password',
		},
		{ title: 'Новый пароль', value: 'ivanivanov', name: 'newPassword', type: 'password' },
		{
			title: 'Повторите новый пароль',
			value: 'ivanivanov',
			name: 'retypeNewPassword',
			type: 'password',
		},
	];
});
