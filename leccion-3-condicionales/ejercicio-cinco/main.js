const activecolor = document.querySelector('.notificacion');



if (activecolor.classList.contains('warning')) {
  Notification.innerHTML('tenga cuidado');
} else if (activecolor.classList.contains('error')); {
  Notification.innerHTML('ha surgido un error');
} else if (activecolor.classList.contains('success')); {
  Notification.innerHTML('los datos son correctos');
}
