import Handlebars from 'handlebars';
import './profile.scss';
export { default as ProfilePage } from './profile.hbs?raw';

Handlebars.registerHelper('profile-page-fields', () => {
	return [
		{
			title: 'Почта',
			value: 'pochta@yandex.ru',
			disabled: 'disabled',
			name: 'email',
			type: 'email',
		},
		{ title: 'Логин', value: 'ivanivanov', disabled: 'disabled', name: 'login', type: 'text' },
		{ title: 'Имя', value: 'Иван', disabled: 'disabled', name: 'first_name', type: 'text' },
		{
			title: 'Фамилия',
			value: 'Иванов',
			disabled: 'disabled',
			name: 'last_name',
			type: 'text',
		},
		{
			title: 'Имя в чате',
			value: 'Иван',
			disabled: 'disabled',
			name: 'display_name',
			type: 'text',
		},
		{
			title: 'Телефон',
			value: '+7 (909) 967 30 30',
			disabled: 'disabled',
			name: 'phone',
			type: 'tel',
		},
	];
});
