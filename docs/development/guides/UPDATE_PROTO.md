# How update gRPC protobuf defintion

- Check if new proto file is available and copy it to `./static-data/lnd/proto/lightning.proto`
- Recreate the typescrpt definitions

```bash
npm run build-grpc-types
```

- Test
- Update lnd version in [README.md](../README.md)
