global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo a node store';

module.exports = {
    connectionString: 'mongodb://vagneralcantara:vagneralcantara15@ds064748.mlab.com:64748/nodestoredb',
    sendGridKey: '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', //envio de e-mail
    containerConnectionString: 'TBD' // armazenar imagens do produto na nuvem
}