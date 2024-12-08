import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    grayOutlinedButton: {
        borderColor: "#d3d3d3", // Warna abu-abu lebih elegan
        borderWidth: 1.5,
        borderRadius: 8, // Membuat sudut lebih bulat
        paddingVertical: 12, // Sedikit lebih besar untuk kenyamanan
        paddingHorizontal: 35,
        backgroundColor: "#f9f9f9", // Sedikit latar belakang untuk kontras
        shadowColor: "#000", // Menambahkan bayangan untuk dimensi
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Bayangan untuk Android
    },
    grayOutlinedButtonText: {
        color: "#ff6347", // Warna oranye kemerahan untuk tampilan yang menarik
        fontWeight: "700",
        fontSize: 16, // Sedikit lebih besar untuk kenyamanan membaca
        letterSpacing: 0.5, // Menambahkan jarak antar huruf untuk estetika
        textAlign: "center", // Pastikan teks terpusat
    },
});
