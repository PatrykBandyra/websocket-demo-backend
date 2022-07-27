package com.example.websocketdemobackend;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WebSocketService {

    private final SimpMessagingTemplate messagingTemplate;

    public void sendMessage(final String topicSuffix, String message) {
        messagingTemplate.convertAndSend("/topic/" + topicSuffix, message);
    }
}
