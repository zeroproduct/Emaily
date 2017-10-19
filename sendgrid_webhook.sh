function localtunnel {
  lt -s af83n0xnmry83mliw47g --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
