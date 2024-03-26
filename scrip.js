var chatOpen = false;
  
  function sendMessage() {
    var input = document.getElementById("input-message");
    var message = input.value;
    
    if (message.trim() === "") return;
    
    appendMessage("You: " + message, 'user-message');
    
    // Bot response (for demonstration purposes, this is a static response)
    setTimeout(function() {
      appendMessage("Bot: Hello! How can I assist you?", 'bot-message');
    }, 500);
    
    input.value = "";
    input.focus();
  }
  
  function appendMessage(message, className) {
    var chatMessages = document.getElementById("chat-messages");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add('message');
    messageElement.classList.add(className);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatMessages.scrollIntoView(false); // Cố gắng cuộn tin nhắn vào tầm nhìn
}
  
  function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    if (chatOpen) {
      chatContainer.style.display = "none";
    } else {
      chatContainer.style.display = "block";
    }
    chatOpen = !chatOpen;
  }
  document.getElementById("input-message").addEventListener("keypress", function(event) {
    // Kiểm tra xem phím nhấn có phải là Enter không (keyCode của phím Enter là 13)
    if (event.keyCode === 13) {
        // Ngăn chặn hành động mặc định của phím Enter (tránh việc gửi biểu mẫu)
        event.preventDefault();
        // Gửi tin nhắn
        sendMessage();
    }
});
function sendMessage() {
    var input = document.getElementById("input-message");
    var message = input.value;
    
    if (message.trim() === "") return;
    
    appendMessage("You: " + message, 'user-message');

    // Kiểm tra nội dung tin nhắn để đưa ra phản hồi phù hợp
    var response;
    if (message.toLowerCase().includes("bây giờ là mấy giờ")) {
        response = "Bot: Hiện tại là " + getCurrentTime() + ".";
    } else if (message.toLowerCase().includes("clb hoàng anh")) {
        response = "Bot: Hôm nay CLB Hoàng Anh đá bóng thắng.";
    } else if (message.toLowerCase().includes("web của tôi")) {
        response = "Bot: Trang web của bạn viết về các bài báo.";
    } else if (message.toLowerCase().includes("my web")) {
        response = "Bot: Trang web của bạn viết về các bài báo.";
    } 
     else {
        // Bot response (for demonstration purposes, this is a static response)
        response = "Bot: Xin chào, tôi có thể giúp gì cho bạn.";
    }

    // Phản hồi tin nhắn
    setTimeout(function() {
        appendMessage(response, 'bot-message');
    }, 300);

    input.value = "";

    // Tập trung lại vào ô nhập tin nhắn sau khi gửi tin nhắn
    input.focus();
}

// Hàm để lấy thời gian hiện tại
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    // Định dạng giờ và phút thành chuỗi "HH:MM"
    return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}


// scroll top
 // JavaScript to scroll to top when scroll_to_back button is clicked
 document.getElementById('scroll_to_back').addEventListener('click', function() {
  scrollToTop();
});

// JavaScript to show/hide scroll_to_back button based on scroll position
window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // If scroll position is greater than 100px, show the button, else hide it
  if (scrollPosition > 100) {
      document.getElementById('scroll_to_back').style.display = 'block';
  } else {
      document.getElementById('scroll_to_back').style.display = 'none';
  }
});

// JavaScript to scroll to top with smooth animation
function scrollToTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 5)); // Adjust the value to change scroll speed
  }
}

