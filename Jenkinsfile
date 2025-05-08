pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Start Application') {
            steps {
                sh 'node index.js &'
                // Or use PM2 if you have it installed:
                // sh 'pm2 start index.js'
            }
        }
    }
}