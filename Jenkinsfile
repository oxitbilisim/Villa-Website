node {
    def app

    stage ('Clean Workspace') {
        cleanWs()
    }
    
    stage ('Git Checkout') {
      git branch: 'master', credentialsId: 'ba3bdf3e-3541-4f49-a5aa-0644baf85d8c', url: 'https://github.com/oxitbilisim/Villa-Website.git'
    }
    
    stage('Remove Existing Image') {
        sh('docker image rmi villa-fe')
    }
      
    stage('Build Image') {
        sh('docker build -t villa-fe . --no-cache')
    }  
   
}
