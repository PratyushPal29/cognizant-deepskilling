package com.example.singleton;

public class TestSingleton {
    public static void main(String[] args) {
        Logger loggerA = Logger.getInstance();
        Logger loggerB = Logger.getInstance();

        System.out.println("Same instance? " + (loggerA == loggerB));  // should print true

        loggerA.info("Starting app...");
        loggerB.warn("Low disk space");
        loggerA.error("Unexpected error occurred");
    }
}
