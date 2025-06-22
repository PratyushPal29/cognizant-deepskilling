package com.example.factory;
public class PdfDocument implements IDocument {
    public void open()  { System.out.println("Opening PDF document"); }
    public void close() { System.out.println("Closing PDF document"); }
}
