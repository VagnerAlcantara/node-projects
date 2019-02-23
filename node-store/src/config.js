global.SALT_KEY = '';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo a node store';

module.exports = {
    connectionString: 'mongodb://vagneralcantara:vagneralcantara15@ds064748.mlab.com:64748/nodestoredb',
    sendGridKey: '', //envio de e-mail
    containerConnectionString: 'TBD' // armazenar imagens do produto na nuvem
}
