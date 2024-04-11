$(document).ready(function() {
  var chatOpen = false;

  function toggleChat() {
    var chatContainer = $("#chat-container");
    if (chatOpen) {
        chatContainer.fadeOut();
    } else {
        // Thêm câu chào khi mở hộp chat
        var greetingMessage = "Eatu coffe Xin chào! bạn cần hỗ trợ gì không?";
        appendMessage(greetingMessage, 'bot-message');
    }
    chatOpen = !chatOpen;
    }
toggleChat();

  // Gửi tin nhắn khi nhấn nút gửi hoặc nhấn Enter
  function sendMessage() {
      var input = $("#input-message");
      var message = input.val().trim();
      if (message === "") return;

      appendMessage(message, 'user-message');

      // Bot response
      var response;
      if (message.toLowerCase().includes("bây giờ là mấy giờ")) {
          response = "Hiện tại là " + getCurrentTime() + ".";
      } else if (message.toLowerCase().includes("hello")) {
          response = "Eatu xin chào, bạn cần giúp đỡ gì không?";
      } else if (message.toLowerCase().includes("web của tôi")) {
          response = "HTX EATU COFFEE.";
      } else if (message.toLowerCase().includes("my web")) {
          response = "Trang web của bạn viết về HTX nông nghiệp.";
      } else if (message.toLowerCase().includes("booking")) {
            response = "Hãy để lại tên và số điện thoại để chuyên viên liên hệ với bạn sớm nhất có thể.";
      } else if (message.toLowerCase().includes("hỗ trợ")) {
          response = "Các Dịch Vụ Cung Cấp: \n" +
                     "1. Hỗ Trợ Kỹ Thuật \n" +
                     "2. Tiếp Thị Sản Phẩm \n" +
                     "3. Quản Lý Nông Nghiệp \n" +
                     "4. Đào Tạo và Phát Triển ";
      } else if (message.toLowerCase().includes("hỗ trợ canh tác")) {
          response = "Hãy để lại tên và số điện thoại để chuyên viên tư vấn cho bạn.";
      } else if (message.toLowerCase().includes("tôi muốn vay vốn")) {
          response = "Hãy để lại tên và số điện thoại để chuyên viên tư vấn cho bạn.";
      } else {
          response = "Eatu Xin chào. Bạn cần hỗ trợ gì không?";
      }

      // Phản hồi từ bot
      setTimeout(function() {
          appendMessage(response, 'bot-message');
      }, 300);

      // Xóa nội dung trong input
      input.val("");
      input.focus();
  }


  // Thêm tin nhắn vào hộp chat
  function appendMessage(message, className) {
      var chatMessages = $("#chat-messages");
      var messageElement = $("<div></div>").text(message).addClass('message').addClass(className);
      chatMessages.append(messageElement);
      chatMessages.scrollTop(chatMessages.prop("scrollHeight"));
  }

  // Mở hoặc đóng hộp chat khi nhấn nút toggle
  $("#chat-toggle").click(function(event) {
      event.stopPropagation(); // Ngăn chặn sự kiện click từ lan truyền ra document
      var chatContainer = $("#chat-container");
      if (chatOpen) {
          chatContainer.fadeOut();
      } else {
          chatContainer.fadeIn();
      }
      chatOpen = !chatOpen;
  });

  // Đóng hộp chat khi nhấn ra bên ngoài hộp chat
  $(document).click(function(event) {
      var chatContainer = $("#chat-container");
      if (chatOpen && !$(event.target).closest("#chat-toggle").length && !$(event.target).closest("#chat-container").length) {
          chatContainer.fadeOut();
          chatOpen = false;
      }
  });

  // Gửi tin nhắn khi nhấn nút gửi hoặc nhấn Enter
  $("#send-button").click(function() {
      sendMessage();
  });

  $("#input-message").keypress(function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          sendMessage();
      }
  });

  // Hàm để lấy thời gian hiện tại
  function getCurrentTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }
});


// scroll top

// JavaScript to show/hide scroll_to_back button based on scroll position
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // If scroll position is greater than 100px, show the button, else hide it
  if (scrollPosition > 100) {
      document.getElementById('scroll_to_back').style.display = 'block';
  } else {
      document.getElementById('scroll_to_back').style.display = 'none';
  }
});




function scrollToElement(elementId) {
var element = document.getElementById(elementId);
if (element) {
element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}




