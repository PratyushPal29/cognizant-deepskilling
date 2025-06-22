package com.example.factory;
public class ExcelDocument implements IDocument {
    public void open()  { System.out.println("Opening Excel document"); }
    public void close() { System.out.println("Closing Excel document"); }
}
