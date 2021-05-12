package org.innox.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Util {
	public static String md5(String source) {
		try {
			MessageDigest md5 = MessageDigest.getInstance("MD5");
			md5.update(source.getBytes());
			return new BigInteger(md5.digest(source.getBytes())).toString(16);
		}catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		}
	}
}
