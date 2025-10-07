function sendWhatsApp() {
  const phoneInput = document.getElementById("userNumber").value.trim();
  if (!phoneInput) {
    alert("Пожалуйста, введите номер телефона.");
    return;
  }

  const encodedMessage = encodeURIComponent(
    `Здравствуйте! Хочу получить скидку 5%. Мой номер телефона: ${phoneInput}`
  );

  const recipient = "79373820709";
  const url = `https://wa.me/${recipient}?text=${encodedMessage}`;

  window.location.href = url;
}
