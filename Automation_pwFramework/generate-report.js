const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './test-results/json/',
    reportPath: './test-results/html-report/',
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'PC',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Informação da Execução',
        data: [
            { label: 'Projeto', value: 'Automation Exercise - Testes E2E' },
            { label: 'Ambiente', value: 'Produção' },
            { label: 'Data de Execução', value: new Date().toLocaleString('pt-PT') },
            { label: 'Framework', value: 'Playwright + Cucumber' }
        ]
    },
    reportName: 'Relatório de Testes Automatizados',
    pageTitle: 'Automation Exercise - Resultados',
    displayDuration: true,
    displayReportTime: true
});
