import hashlib

m = hashlib.md5()
m.update(b"testing string")
digest = m.hexdigest()
print(digest)
