import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

interface Pages {
	[key: string]: Array<string>;
}

const pages: Pages = {
	chat: [Pages.ChatPage],
	login: [Pages.LoginPage],
	register: [Pages.RegisterPage],
	profile: [Pages.ProfilePage],
	editProfile: [Pages.EditProfilePage],
	password: [Pages.PasswordPage],
	badRequest: [Pages.BadRequest],
	serverError: [Pages.ServerError],
};

Object.entries(Components).forEach(([name, component]) => {
	Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
	const [source, args] = pages[page];
	const handlebarsFunct = Handlebars.compile(source);
	document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e) => {
	const target = e.target as HTMLElement;
	const page = target.getAttribute('page');
	if (page) {
		navigate(page);

		e.preventDefault();
		e.stopImmediatePropagation();
	}
});
