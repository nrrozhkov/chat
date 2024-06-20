import Handlebars from 'handlebars';
import './edit-profile.scss';
export { default as EditProfilePage } from './edit-profile.hbs?raw';

Handlebars.registerHelper('edit-profile-page-fields', () => {
	return [
		{
			title: 'Почта',
			value: 'pochta@yandex.ru',
			name: 'email',
			type: 'email',
		},
		{ title: 'Логин', value: 'ivanivanov', name: 'login', type: 'text' },
		{ title: 'Имя', value: 'Иван', name: 'first_name', type: 'text' },
		{
			title: 'Фамилия',
			value: 'Иванов',
			name: 'second_name',
			type: 'text',
		},
		{
			title: 'Имя в чате',
			value: 'Иван',
			name: 'display_name',
			type: 'text',
		},
		{
			title: 'Телефон',
			value: '+7 (909) 967 30 30',
			name: 'phone',
			type: 'tel',
		},
	];
});
