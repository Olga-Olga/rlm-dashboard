'use strict';

var pathToImages = './img';
var pathToApp = 'app';

module.exports = function () {
    return {
        host: '',
        port: 80,

        pathToApp: pathToApp,
        appHtml: pathToApp + '/app.html',
        pageNotFound: pathToApp + '/404.html',

        rdpCred: {
            user: 'Administrator',
            pwd: 'password'
        },
        environments: [
            {
                name: 'stl-qa-oalmt1',
                jobName: 'QA_RLM_AUTOCONFIG_stl-qa-oalmt1__MAIN',
                os: 'Server 2003 R2 Enterprise SP2 x86',
                rlm: {
                    installType: 'Upgrade',
                    upgrade: '5.1.0.680 GA'
                },
                sbm: '10.1.4.1',
                sbmUpgrade: '10.1.4 GA',
                sra: {
                    install: 'Local',
                    installedBy: 'SOO installer',
                    server: 'Local',
                    serverDetails: 'serena_ra/password'
                },
                database: {
                    hostname: 'stl-qa-oalmt1db',
                    type: 'Oracle 11.2.0.1',
                    credentials: [
                        'system/manager@oalm',
                        'sbm2_2/manager@oalm'
                    ]
                },
                iis: '6.0'
            },
            {
                name: 'stl-qa-oalmt2',
                jobName: 'QA_RLM_AUTOCONFIG_stl-qa-oalmt2__MAIN',
                os: 'Server 2008 R2 Enterprise SP1 x64',
                rlm: {
                    installType: 'Clean',
                    upgrade: null
                },
                sbm: '10.1.4.1',
                sbmUpgrade: null,
                sra: {
                    install: 'Remote',
                    installedBy: 'CI of SRA',
                    server: 'stl-alms-tst6',
                    serverDetails: 'Tomcat'
                },
                database: {
                    hostname: 'stl-qa-oalmt1fs',
                    type: 'Oracle 11.2.0.1',
                    credentials: [
                        'system/manager@oalm',
                        'sbm2/manager@oalm'
                    ]
                },
                iis: '7.5'
            },
            {
                name: 'stl-qa-oalmt3',
                jobName: 'QA_RLM_AUTOCONFIG_stl-qa-oalmt3__MAIN',
                os: 'Server 2003 R2 Enterprise SP2 x86',
                rlm: {
                    installType: 'Upgrade',
                    upgrade: '5.1.0.680 GA'
                },
                sbm: '10.1.4.1',
                sbmUpgrade: '10.1.4 GA',
                sra: {
                    install: 'Remote',
                    installedBy: 'CI of SRA',
                    server: 'stl-alms-tst5',
                    serverDetails: 'Tomcat'
                },
                database: {
                    hostname: 'localhost',
                    type: 'Microsoft SQL Server 2008 R2 SP2',
                    credentials: [
                        'sa/manager'
                    ]
                },
                iis: '6.0'
            },
            {
                name: 'stl-alms-tst4',
                jobName: 'QA_RLM_AUTOCONFIG_stl-alms-tst4__MAIN',
                os: 'Server 2008 R2 Standard SP1 x64',
                rlm: {
                    installType: 'Clean',
                    upgrade: null
                },
                sbm: '10.1.4.1',
                sbmUpgrade: null,
                sra: {
                    install: 'Local',
                    installedBy: 'SOO installer',
                    server: 'Local',
                    serverDetails: 'serena_ra/password'
                },
                database: {
                    hostname: 'localhost',
                    type: 'Microsoft SQL Server 2012 SP1',
                    credentials: [
                        'sa/manager'
                    ]
                },
                iis: '7.5'
            },
            {
                name: 'stl-alms-tst7',
                jobName: 'QA_RLM_AUTOCONFIG_stl-alms-tst7__MAIN',
                os: 'Server 2012 R2 Standard x64',
                rlm: {
                    installType: 'Clean',
                    upgrade: null
                },
                sbm: '10.1.4.1',
                sbmUpgrade: null,
                sra: {
                    install: 'Local',
                    installedBy: 'SOO installer',
                    server: 'Local',
                    serverDetails: 'serena_ra/password'
                },
                database: {
                    hostname: 'localhost',
                    type: 'Microsoft SQL Server 2008 R2 SP2',
                    credentials: [
                        'sa/manager'
                    ]
                },
                iis: '8.5'
            }
        ],

        jenkinsUrl: 'http://stl-qa-oalmsl:8080',
        statusGreen: pathToImages + '/green.png',
        statusRed: pathToImages + '/red.png',
        statusError: pathToImages + '/error.png',
        statusGrey: pathToImages + '/grey.png',
        statusAnime: pathToImages + '/blue_anime.gif'
    };
};
