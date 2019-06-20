module.exports = {

    locales: {
      '/': {
        lang: 'fr-CA',
        title: 'EDU JD',
        description: 'Ressources technologiques pour enseignants'
      },
      '/en/': {
        lang: 'en-US',
        title: 'EDU JD',
        description: 'Technological ressources for teachers'
      }
    },
  
    themeConfig: {
        search: false,
        locales: {
            '/': {
                nav: [
                    { text: 'Mots croisés', link: '/motscroises/' },
                    { text: 'Google Sheets', link: '/sheets/' },
                    { text: 'Google Forms', link: '/forms/' },
                ]
            },
            '/en/': {
                nav: [
                    { text: 'Crosswords', link: '/motscroises/' },
                    { text: 'Google Sheets', link: '/sheets/' },
                    { text: 'Google Forms', link: '/forms/' },
                ]
            }
        }
    }
}