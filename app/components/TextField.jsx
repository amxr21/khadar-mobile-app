import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function TextField({
  label,
  value,
  onChangeText,
  type = "text", // "text", "email", "password", "number", "emiratesId"
  placeholder,
  required = false,
  minLength,
  maxLength,
}) {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState("");

  // Emirates ID formatting function
  const formatEmiratesId = (text) => {
    let digits = text.replace(/\D/g, ""); // remove non-digit characters
    if (!digits.startsWith("784")) digits = "784" + digits;

    let formatted = digits;
    if (digits.length > 3) formatted = digits.slice(0, 3) + "-" + digits.slice(3);
    if (digits.length > 7) formatted =
      digits.slice(0, 3) + "-" + digits.slice(3, 7) + "-" + digits.slice(7);
    if (digits.length > 14) formatted =
      digits.slice(0, 3) + "-" + digits.slice(3, 7) + "-" + digits.slice(7, 14) + "-" + digits.slice(14, 15);

    return formatted;
  };

  // Validation function
  const validate = (text) => {
    if (required && !text) return "This field is required";

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (text && !emailRegex.test(text)) return "Invalid email address";
    }

    if (type === "password") {
      if (minLength && text.length < minLength)
        return `Password must be at least ${minLength} characters`;
    }

    if (type === "number") {
      if (text && isNaN(text)) return "Only numbers are allowed";
    }

    if (type === "emiratesId") {
      const emiratesRegex = /^784-\d{4}-\d{7}-\d{1}$/;
      if (text && !emiratesRegex.test(text)) return "Invalid Emirates ID";
    }

    if (maxLength && text.length > maxLength)
      return `Max ${maxLength} characters allowed`;

    return "";
  };

  // Handle input change
  const handleChange = (text) => {
    let formattedText = text;

    if (type === "emiratesId") {
      formattedText = formatEmiratesId(text);
    }

    onChangeText && onChangeText(formattedText);
    if (touched) setError(validate(formattedText));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(value));
  };

  return (
    <View className="mb-4">
      {label && <Text className="text-white text-lg font-light mb-2">{label}</Text>}
      <TextInput
        className={`bg-[#ffffff14] p-3 h-14 w-full min-w-36 border rounded-xl ${
          error ? "border-red-500" : "border-[#ffffffcb]"
        } text-white`}
        value={value}
        onChangeText={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor="#ffffff50"
        keyboardType={
          type === "email"
            ? "email-address"
            : type === "number" || type === "emiratesId"
            ? "numeric"
            : "default"
        }
        secureTextEntry={type === "password"}
        maxLength={type === "emiratesId" ? 17 : maxLength}
      />

      {error ? <Text className="text-red-400 mt-1 text-sm">{error}</Text> : null}
    </View>
  );
}
