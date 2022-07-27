package com.example.websocketdemobackend;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GreetingRestController {

    private final WebSocketService webSocketService;

    @GetMapping("hello")
    public Greeting getGreeting() {
        log.info("Somebody fetched greeting");
        webSocketService.sendMessage("/hello", "Somebody fetched greeting");
        return new Greeting("Hello World");
    }
}
