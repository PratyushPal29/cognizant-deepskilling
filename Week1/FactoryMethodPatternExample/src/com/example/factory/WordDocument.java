package com.example.factory;
public class WordDocument implements IDocument {
    public void open()  { System.out.println("Opening Word document"); }
    public void close() { System.out.println("Closing Word document"); }
}
