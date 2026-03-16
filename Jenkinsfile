pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                bat 'rmdir /s /q node_modules'
                bat 'del package-lock.json'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Cypress Binary') {
            steps {
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npm run allure:generate'
            }
        }
    }
}