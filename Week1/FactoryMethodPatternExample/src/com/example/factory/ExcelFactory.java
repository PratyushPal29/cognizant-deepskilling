package com.example.factory;
public class ExcelFactory extends DocumentFactory {
    public IDocument createDocument() {
        return new ExcelDocument();
    }
}
