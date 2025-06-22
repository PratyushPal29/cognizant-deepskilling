package com.example.factory;
public class PdfFactory extends DocumentFactory {
    public IDocument createDocument() {
        return new PdfDocument();
    }
}
