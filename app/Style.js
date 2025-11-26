import { StyleSheet } from "react-native";

const GREEN = "#1fa55b";
const BG_DARK = "rgba(0,0,0,0.7)";

export default StyleSheet.create({
  bg: { flex: 1, justifyContent: "flex-start" },
  bgImage: { resizeMode: "cover" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: BG_DARK },
  poweredBy: { position: "absolute", bottom: 20, alignSelf: "center", color: "#e3ecef", fontSize: 13 },
  centerScreen: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 24 },
  topScreen: { flex: 1, paddingTop: 80, paddingHorizontal: 24 },
  logoBlock: { alignItems: "center", marginBottom: 32 },
  logoCircle: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: "#fff", alignItems: "center", justifyContent: "center", marginBottom: 14 },
  logoEmoji: { fontSize: 36 },
  logoTitle: { fontSize: 28, fontWeight: "700", color: "#fff", textTransform: "capitalize" },
  logoSubtitle: { marginTop: 4, color: "#d0d9dd", fontSize: 13 },
  primaryButton: { marginTop: 24, flexDirection: "row", alignItems: "center", backgroundColor: GREEN, paddingHorizontal: 32, paddingVertical: 14, borderRadius: 999 },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "600", marginRight: 6 },
  primaryButtonArrow: { color: "#fff", fontSize: 18 },
  youAreText: { color: "#fff", fontSize: 16, marginBottom: 16 },
  rolesRow: { flexDirection: "row", justifyContent: "space-between" },
  roleCard: { flex: 1, backgroundColor: "rgba(0,0,0,0.55)", marginHorizontal: 4, borderRadius: 18, paddingVertical: 18, paddingHorizontal: 10, alignItems: "center" },
  roleIcon: { fontSize: 24, marginBottom: 10 },
  roleLabel: { color: "#fff", fontSize: 13, textAlign: "center" },
  loginLinkWrapper: { marginTop: 32, alignItems: "center" },
  loginLinkText: { color: "#d0d9dd", fontSize: 14 },
  loginTitle: { color: "#fff", fontSize: 26, marginBottom: 10 },
  loginSubtitle: { color: "#d0d9dd", textAlign: "center" },
});
