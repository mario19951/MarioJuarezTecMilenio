(function () {

    // Inicializar Firebase
    var config = {
        apiKey: "AIzaSyDHgEzDiLQxz1vgEQPQEOq8UcOI_pqUayk",
        authDomain: "bmghjgh.firebaseapp.com",
        databaseURL: "https://bmghjgh.firebaseio.com",
        projectId: "bmghjgh",
        storageBucket: "bmghjgh.appspot.com",
        messagingSenderId: "468705689592"
    };
    firebase.initializeApp(config);

    // Obtener elementos
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    // Añadir Evento login
    btnLogin.addEventListener('click', e => {
        //Obtener email y pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in

        const promise = auth.signInWithEmailAndPassword(email, pass)

            .then(user => {
                alert("Acceso Correcto");
                location = 'intro.html' //Url aqui
            }).catch(error => {
                alert("Email/Contraseña no estan en nuestra base de datos");
            })
        //Mensaje de alerta al usuario

    });

    // Añadir evento signup
    btnSignUp.addEventListener('click', e => {
        // Obtener email y pass
        // TODO: comprobar que el email sea real
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass)
            //  promise.catch(e => console.log(e.message));
            //  Eliminar las siguientes 7 lineas de codigo si comienza a marcar error 1 Abril 2019
            .then(user => {
                alert("Registrado");
                location = 'intro.html' //Url de la pagina que vamos a redireccionar
            }).catch(error => {
                alert("Ingresa otro Email, la contraseña debe ser de 6 digitos");
            })
    });

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    // Añadir un listener en tiempo real
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {

            console.log(firebaseUser);
            btnLogout.classList.remove('hide');

        } else {
            console.log('no logueado');
            btnLogout.classList.add('hide');
        }
    });

}());