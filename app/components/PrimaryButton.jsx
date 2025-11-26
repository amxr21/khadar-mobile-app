import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../Style";

export default function PrimaryButton({ label, onPress }) {
  return (
    <TouchableOpacity className="bg-primaryGreen px-4 py-3 w-24 rounded-xl flex items-center justify-center" onPress={onPress}>
        {label || label == "" ? '': <Text style={styles.primaryButtonText}>{label}</Text>}
        <Text style={styles.primaryButtonArrow}>→</Text>
    </TouchableOpacity>
  );
}
