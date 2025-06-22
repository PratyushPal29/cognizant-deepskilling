package com.example.singleton;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDateTime;

public class Logger {
    private static volatile Logger instance;  // Single static instance (volatile for thread-safety)
    private PrintWriter writer;

    // Private constructor prevents instantiation
    private Logger() {
        try {
            writer = new PrintWriter(new FileWriter("app.log", true), true);
        } catch (IOException e) {
            e.printStackTrace(); // handle exception
        }
    }

    // Thread-safe, lazy-loaded Singleton getter (double-checked locking)
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    // Logging methods
    public void log(String level, String message) {
        String time = LocalDateTime.now().toString();
        writer.printf("%s [%s]: %s%n", time, level, message);
    }

    public void info(String msg)    { log("INFO", msg); }
    public void warn(String msg)    { log("WARN", msg); }
    public void error(String msg)   { log("ERROR", msg); }
}
